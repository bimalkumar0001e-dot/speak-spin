import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronDown, Check, Search, Globe } from 'lucide-react';
import { DOMAINS, Domain } from '../data/domains';

interface DomainSelectorProps {
  selectedDomainId: string;
  onSelectDomain: (domainId: string) => void;
  disabled?: boolean;
}

export function DomainSelector({
  selectedDomainId,
  onSelectDomain,
  disabled = false,
}: DomainSelectorProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const dropdownRef = useRef<HTMLDivElement>(null);

  const selectedDomain = DOMAINS.find((d) => d.id === selectedDomainId) || DOMAINS[0];

  const filteredDomains = DOMAINS.filter((d) =>
    d.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // Close dropdown on click outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleSelect = (domainId: string) => {
    onSelectDomain(domainId);
    setIsOpen(false);
    setSearchQuery('');
  };

  return (
    <div className="relative z-30" ref={dropdownRef}>
      {/* Selector Trigger Button */}
      <button
        type="button"
        id="domain-dropdown-btn"
        disabled={disabled}
        onClick={() => !disabled && setIsOpen(!isOpen)}
        className={`px-3 py-1.5 sm:px-3.5 sm:py-2 rounded-full bg-[#13131A] border transition-all duration-200 cursor-pointer flex items-center gap-2 text-xs font-medium tracking-wide ${
          isOpen
            ? 'border-[#D8B46A] text-[#F6F2EB] shadow-[0_0_15px_rgba(216,180,106,0.25)]'
            : 'border-white/10 text-[#A8A2B8] hover:text-[#F6F2EB] hover:border-white/20'
        } ${disabled ? 'opacity-50 cursor-not-allowed' : ''}`}
        title="Select prompt domain filter"
      >
        <span className="font-sans font-medium text-[#F6F2EB] max-w-[110px] sm:max-w-[140px] truncate">
          {selectedDomain.name}
        </span>
        <ChevronDown
          className={`w-3.5 h-3.5 text-[#D8B46A] transition-transform duration-200 ${
            isOpen ? 'rotate-180' : ''
          }`}
        />
      </button>

      {/* Dropdown Menu Popup */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 8, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 6, scale: 0.96 }}
            transition={{ duration: 0.18, ease: 'easeOut' }}
            className="absolute right-0 mt-2 w-64 sm:w-72 rounded-2xl bg-[#13131A] border border-white/15 shadow-[0_20px_50px_rgba(0,0,0,0.8)] p-2 backdrop-blur-xl overflow-hidden"
          >
            {/* Search Input for fast domain filtering */}
            <div className="relative mb-2 px-1">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-[#A8A2B8]/60" />
              <input
                type="text"
                placeholder="Search domain..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-[#0C0C0F] border border-white/10 rounded-xl pl-8 pr-3 py-1.5 text-xs text-[#F6F2EB] placeholder-[#A8A2B8]/50 focus:outline-none focus:border-[#D8B46A]/50 transition-colors"
                autoFocus
              />
            </div>

            {/* List of Domains */}
            <div className="max-h-64 overflow-y-auto pr-1 space-y-0.5 custom-scrollbar">
              {filteredDomains.length === 0 ? (
                <div className="px-3 py-4 text-center text-xs text-[#A8A2B8]/50">
                  No domain found
                </div>
              ) : (
                filteredDomains.map((domain) => {
                  const isSelected = domain.id === selectedDomainId;
                  return (
                    <button
                      key={domain.id}
                      type="button"
                      onClick={() => handleSelect(domain.id)}
                      className={`w-full px-3 py-2 rounded-xl text-xs flex items-center justify-between transition-all duration-150 cursor-pointer ${
                        isSelected
                          ? 'bg-[#D8B46A]/15 text-[#D8B46A] font-semibold'
                          : 'text-[#F6F2EB]/80 hover:bg-white/5 hover:text-[#F6F2EB]'
                      }`}
                    >
                      <div className="flex items-center gap-2.5 min-w-0">
                        <span className="truncate">{domain.name}</span>
                      </div>
                      {isSelected && <Check className="w-3.5 h-3.5 text-[#D8B46A] shrink-0" />}
                    </button>
                  );
                })
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
