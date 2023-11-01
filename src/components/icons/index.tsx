import icons from './IconsPath';

export function Icon({ name }: { name: string }) {
  const viewBox = (name: string): string => {
    switch (name) {
      case 'whatsapp':
        return '0 0 50 50';
      case 'resume':
        return '0 0 32 32';
      case 'telegram':
      case 'todo':
        return '0 0 24 24';
      case 'logistic':
        return '0 0 612 612';
      case 'auto':
        return '0 0 50 50';
      case 'auth':
        return '0 0 40 40';
      default:
        return '0 0 0 0';
    }
  };

  return (
    <>
      <svg
        version="1.1"
        viewBox={viewBox(name)}
        width={name === 'auto' ? 176 : 76}
        height={name === 'whatsapp' ? 55 : 60}
        fill="#0ea5e9"
        dangerouslySetInnerHTML={{ __html: icons[name] }}
      />
    </>
  );
}
