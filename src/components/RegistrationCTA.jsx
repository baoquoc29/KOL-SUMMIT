import { useState, useEffect, useCallback } from 'react';
import { X } from 'lucide-react';
import { registrationFields } from '../data/landingData';
import GradientButton from './GradientButton';

function RegistrationModal({ isOpen, onClose }) {
  const [formData, setFormData] = useState({});
  const [errors, setErrors] = useState({});
  const [agreed, setAgreed] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  // Lock body scroll
  useEffect(() => {
    if (isOpen) {
      document.body.classList.add('modal-open');
    } else {
      document.body.classList.remove('modal-open');
    }
    return () => document.body.classList.remove('modal-open');
  }, [isOpen]);

  // Escape to close
  const handleKeyDown = useCallback(
    (e) => {
      if (e.key === 'Escape') onClose();
    },
    [onClose]
  );

  useEffect(() => {
    if (isOpen) {
      document.addEventListener('keydown', handleKeyDown);
      return () => document.removeEventListener('keydown', handleKeyDown);
    }
  }, [isOpen, handleKeyDown]);

  const handleChange = (name, value) => {
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }));
    }
  };

  const validate = () => {
    const newErrors = {};
    registrationFields.forEach((field) => {
      if (field.required && !formData[field.name]?.trim()) {
        newErrors[field.name] = `${field.label} không được để trống`;
      }
      if (field.type === 'email' && formData[field.name]) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(formData[field.name])) {
          newErrors[field.name] = 'Email không hợp lệ';
        }
      }
      if (field.type === 'tel' && formData[field.name]) {
        const phoneRegex = /^[0-9]{9,12}$/;
        if (!phoneRegex.test(formData[field.name].replace(/\s/g, ''))) {
          newErrors[field.name] = 'Số điện thoại không hợp lệ';
        }
      }
    });
    if (!agreed) {
      newErrors.agreed = 'Vui lòng đồng ý điều khoản';
    }
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = validate();
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }
    setSubmitted(true);
  };

  const handleReset = () => {
    setFormData({});
    setErrors({});
    setAgreed(false);
    setSubmitted(false);
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center p-4"
      role="dialog"
      aria-modal="true"
      aria-label="Đăng ký tham dự KOL Summit 2026"
    >
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/70 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* Modal */}
      <div className="relative w-full max-w-lg max-h-[90vh] overflow-y-auto gradient-border neon-glow-strong p-6 md:p-8">
        <button
          type="button"
          onClick={onClose}
          aria-label="Đóng"
          className="absolute top-4 right-4 w-8 h-8 rounded-full bg-white/10 flex items-center justify-center text-white/60 hover:text-white hover:bg-white/20 transition-colors cursor-pointer"
        >
          <X size={18} />
        </button>

        {submitted ? (
          <div className="text-center py-8 space-y-4">
            <div className="w-16 h-16 mx-auto rounded-full bg-gradient-to-r from-neon-purple to-cyan-400 flex items-center justify-center mb-4">
              <span className="text-2xl">✓</span>
            </div>
            <h3 className="text-xl md:text-2xl font-bold text-white">Đăng ký thành công!</h3>
            <p className="text-sm text-white/60">
              Cảm ơn bạn đã đăng ký tham dự KOL Summit 2026. Chúng tôi sẽ liên hệ với bạn sớm nhất.
            </p>
            <GradientButton onClick={handleReset} className="mt-4">
              Đóng
            </GradientButton>
          </div>
        ) : (
          <>
            <h3 className="text-xl md:text-2xl font-bold text-white mb-1">
              Đăng ký tham dự
            </h3>
            <p className="text-sm text-white/50 mb-6">KOL Summit 2026</p>

            <form onSubmit={handleSubmit} className="space-y-4">
              {registrationFields.map((field) => (
                <div key={field.name}>
                  <label
                    htmlFor={field.name}
                    className="block text-sm font-medium text-white/80 mb-1.5"
                  >
                    {field.label}
                    {field.required && <span className="text-pink-purple ml-1">*</span>}
                  </label>
                  {field.type === 'select' ? (
                    <select
                      id={field.name}
                      value={formData[field.name] || ''}
                      onChange={(e) => handleChange(field.name, e.target.value)}
                      className="w-full px-4 py-2.5 rounded-xl bg-navy-800/80 border border-white/10 text-white text-sm focus:border-neon-purple focus:outline-none focus:ring-1 focus:ring-neon-purple transition-colors appearance-none"
                    >
                      <option value="">-- Chọn --</option>
                      {field.options.map((opt) => (
                        <option key={opt} value={opt}>
                          {opt}
                        </option>
                      ))}
                    </select>
                  ) : (
                    <input
                      id={field.name}
                      type={field.type}
                      value={formData[field.name] || ''}
                      onChange={(e) => handleChange(field.name, e.target.value)}
                      className="w-full px-4 py-2.5 rounded-xl bg-navy-800/80 border border-white/10 text-white text-sm placeholder-white/30 focus:border-neon-purple focus:outline-none focus:ring-1 focus:ring-neon-purple transition-colors"
                      placeholder={field.label}
                    />
                  )}
                  {errors[field.name] && (
                    <p className="text-xs text-pink-purple mt-1">{errors[field.name]}</p>
                  )}
                </div>
              ))}

              {/* Checkbox */}
              <div className="flex items-start gap-3">
                <input
                  id="agree"
                  type="checkbox"
                  checked={agreed}
                  onChange={(e) => {
                    setAgreed(e.target.checked);
                    if (errors.agreed) setErrors((prev) => ({ ...prev, agreed: '' }));
                  }}
                  className="mt-1 w-4 h-4 rounded border-white/20 bg-navy-800 text-neon-purple focus:ring-neon-purple accent-purple-600"
                />
                <label htmlFor="agree" className="text-xs md:text-sm text-white/60 leading-relaxed">
                  Tôi đồng ý với các điều khoản và điều kiện của chương trình KOL Summit 2026.
                </label>
              </div>
              {errors.agreed && (
                <p className="text-xs text-pink-purple">{errors.agreed}</p>
              )}

              <GradientButton type="submit" className="w-full !py-3 mt-2">
                Gửi đăng ký
              </GradientButton>
            </form>
          </>
        )}
      </div>
    </div>
  );
}

export default function RegistrationCTA() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <section
        id="register"
        className="relative py-16 md:py-24 overflow-hidden"
      >
        <div className="absolute inset-0 bg-gradient-to-br from-neon-purple-dark/30 via-navy-950 to-electric-blue/20" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-neon-purple/15 rounded-full blur-[150px] animate-glow-pulse" />
        <div className="absolute inset-0 geo-grid opacity-20" />

        <div className="relative max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <h2 className="font-display-wide text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold uppercase">
            <span className="bg-gradient-to-r from-white via-purple-200 to-cyan-200 bg-clip-text text-transparent">
              Sẵn sàng đồng hành cùng KOL Summit 2026?
            </span>
          </h2>
          <p className="text-sm md:text-base lg:text-lg text-white/70 max-w-2xl mx-auto leading-relaxed">
            Tham gia diễn đàn để cùng kết nối, trao đổi và thúc đẩy một hệ sinh thái ảnh hưởng số minh bạch, có trách nhiệm và bền vững.
          </p>
          <GradientButton
            onClick={() => setIsModalOpen(true)}
            className="!px-10 !py-4 !text-base md:!text-lg"
          >
            ĐĂNG KÝ NGAY
          </GradientButton>
        </div>
      </section>

      <RegistrationModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </>
  );
}
