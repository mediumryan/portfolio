import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import IntroPR from './IntroPR';
import { MdOutlineWork } from 'react-icons/md';
import { IoPerson } from 'react-icons/io5';
import { FaPencilAlt } from 'react-icons/fa';
import IntroWork from './IntroWork';
import IntroStudy from './IntroStudy';

const tabsIconStyle = 'mr-2 text-lg';
const tabsContentStyle = 'w-full h-[400px] md:h-[450px] px-2 py-4 overflow-y-auto scrollbar-thin';

export default function IntroContentsArea() {
  return (
    <Tabs defaultValue="0" className="w-full">
      <TabsList className="grid w-full grid-cols-3 bg-gray-50 p-1.5 rounded-xl">
        <TabsTrigger value="0" className="rounded-lg py-2 transition-all">
          <IoPerson className={tabsIconStyle} />
          PR
        </TabsTrigger>
        <TabsTrigger value="1" className="rounded-lg py-2 transition-all">
          <MdOutlineWork className={tabsIconStyle} />
          職務経歴
        </TabsTrigger>
        <TabsTrigger value="2" className="rounded-lg py-2 transition-all">
          <FaPencilAlt className={tabsIconStyle} />
          学歴・資格
        </TabsTrigger>
      </TabsList>
      
      <TabsContent value="0" className="mt-4 outline-none">
        <div className={`${tabsContentStyle} overflow-y-hidden`}>
          <IntroPR />
        </div>
      </TabsContent>
      <TabsContent className={`${tabsContentStyle} mt-4 outline-none`} value="1">
        <IntroWork />
      </TabsContent>
      <TabsContent className={`${tabsContentStyle} mt-4 outline-none`} value="2">
        <IntroStudy />
      </TabsContent>
    </Tabs>
  );
}
