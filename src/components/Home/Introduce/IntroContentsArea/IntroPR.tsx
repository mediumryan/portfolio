import { introPR1, introPR2, introPR3 } from '@/data/intro';

const PRTextStyle = 'leading-loose font-bold';

export default function IntroPR() {
  return (
    <div className="h-full rounded-md p-2 md:my-24">
      <p className={PRTextStyle}>{introPR1}</p>
      <p className={PRTextStyle}>{introPR2}</p>
      <p className={PRTextStyle}>{introPR3}</p>
    </div>
  );
}
