import icons from './IconsPath';

export function Icon({ name }: { name: string }) {
  const viewBox = (name: string): string => {
    switch (name) {
      case 'logistic':
        return '0 0 612 612';
      case 'autoA':
        return '0 0 50 50';
      case 'auto':
        return '0 0 1000 600';
      case 'todo':
        return '0 0 128 128';
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
        width={name == 'auto' ? 176 : 76}
        height={76}
        fill="#0ea5e9"
        dangerouslySetInnerHTML={{ __html: icons[name] }}
      />
    </>
  );
}
