// Configurable image frame for section media.
//
// Usage — pass the picture and a `settings` object:
//   <MediaFrame image={photo} alt="..." settings={{ fit: 'cover' }} />
//   <MediaFrame image={logo}  alt="..." settings={{ fit: 'contain', bg: '#fff' }} />
//   <MediaFrame image={pic}   alt="..." settings={{ scale: 0.9, position: 'top' }} />
//
// settings keys (all optional):
//   - fit:        'cover' (fill, default) | 'contain' (fit everything in) | 'none' (don't zoom)
//   - scale:      1 = don't zoom (default); <1 zooms OUT; >1 zooms in
//   - position:   object-position, e.g. 'center' | 'top' | 'left'
//   - bg:         background behind a contained image, e.g. '#fff'
//   - blur:       'mobile' (blurred on phones, sharp from sm up) | true (always) | false (default)
//   - rounded:    rounding class (default 'rounded-2xl')
//   - heightClass:height class (default 'h-full')
//   - className:  extra wrapper classes (sizing/alignment in the page grid)
//   - loading:    img loading attr (default 'lazy')
//
// Inline style is only used for dynamic values (position/scale/bg).
export default function MediaFrame({ image, alt, settings = {} }) {
  const {
    fit = 'cover',
    position = 'center',
    scale = 1,
    bg,
    blur = false,
    rounded = 'rounded-2xl',
    heightClass = 'h-full',
    className = '',
    loading = 'lazy',
  } = settings;

  const fitClass =
    fit === 'contain' ? 'object-contain' : fit === 'none' ? 'object-none' : 'object-cover';

  const blurClass =
    blur === 'mobile' ? 'blur-[2px] sm:blur-0' : blur ? 'blur-[2px]' : '';

  return (
    <div
      className={`overflow-hidden ${rounded} ${className}`}
      style={bg ? { backgroundColor: bg } : undefined}
    >
      <img
        src={image}
        alt={alt}
        loading={loading}
        className={`w-full ${heightClass} ${fitClass} ${blurClass}`}
        style={{
          objectPosition: position,
          ...(scale !== 1 ? { transform: `scale(${scale})` } : {}),
        }}
      />
    </div>
  );
}
