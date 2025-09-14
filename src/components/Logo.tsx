import Image from 'next/image';

interface LogoProps {
    width?: number;
    height?: number;
    showSubtitle?: boolean;
    className?: string;
}

export default function Logo({ 
    width = 90, 
    height = 30, 
    showSubtitle = true,
    className = ''
}: LogoProps) {
    const logoStyles = {
        display: 'flex',
        alignItems: 'center',
        gap: '8px',
        color: 'var(--lm-heading)'
    };

    const brandSubStyles = {
        marginTop: '2px',
        fontSize: '11px',
        letterSpacing: '.06em',
        textTransform: 'uppercase' as const,
        color: 'color-mix(in srgb, var(--lm-text) 80%, transparent)'
    };

    return (
        <div className={`logo ${className}`} style={logoStyles}>
            <div className="logo-image">
                <Image
                    src="/images/logo/logo.png"
                    alt="Ле-манш"
                    width={width}
                    height={height}
                    style={{ height: 'auto' }}
                />
            </div>
            {showSubtitle && (
                <div className="logo-text">
                    <div style={brandSubStyles}>Производство мебели<br />на заказ</div>
                </div>
            )}
        </div>
    );
}