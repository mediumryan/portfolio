import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import IntroPR from './IntroPR';
import { MdOutlineWork } from 'react-icons/md';
import { IoPerson } from 'react-icons/io5';
import { FaPencilAlt } from 'react-icons/fa';
import IntroWork from './IntroWork';
import IntroStudy from './IntroStudy';

const tabsIconStyle = 'mr-1';
const tabsContentStyle = 'px-4 py-2 md:w-[450px] h-[440px] overflow-y-auto';

export default function IntroContentsArea() {
  return (
    <Tabs defaultValue="0">
      <TabsList className="grid w-full grid-cols-3">
        <TabsTrigger value="0">
          <IoPerson className={tabsIconStyle} />
          PR
        </TabsTrigger>
        <TabsTrigger value="1">
          <MdOutlineWork className={tabsIconStyle} />
          職務経歴
        </TabsTrigger>
        <TabsTrigger value="2">
          <FaPencilAlt className={tabsIconStyle} />
          学歴・資格
        </TabsTrigger>
      </TabsList>
      <TabsContent value="0">
        <div className={`${tabsContentStyle} overflow-y-hidden`}>
          <IntroPR />
        </div>
      </TabsContent>
      <TabsContent className={`${tabsContentStyle}`} value="1">
        <IntroWork />
      </TabsContent>
      <TabsContent className={`${tabsContentStyle}`} value="2">
        <IntroStudy />
      </TabsContent>
    </Tabs>
  );
}
