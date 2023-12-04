import icons from './IconsPath';

interface Props {
  name: string;
  width?: number;
  height?: number;
}

export function Icon({ name, width = 76, height = 60 }: Props) {
  const viewBox = (name: string): string => {
    switch (name) {
      case 'whatsapp':
      case 'auto':
        return '0 0 50 50';
      case 'resume':
        return '0 0 32 32';
      case 'telegram':
      case 'todo':
      case 'on_track':
      case 'verified':
      case 'auth':
        return '0 0 24 24';
      case 'logistic':
        return '0 0 612 612';
      default:
        return '0 0 0 0';
    }
  };

  return (
    <>
      <svg
        version="1.1"
        viewBox={viewBox(name)}
        width={name === 'auto' ? 176 : width}
        height={name === 'whatsapp' ? 55 : height}
        fill="#0ea5e9"
        dangerouslySetInnerHTML={{ __html: icons[name] }}
      />
    </>
  );
}
