import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import SkillList from './SkillList/SkillList';
import SkillChart from './SkillChart';

const tabsContentStyle = 'w-full min-h-[460px] mt-4 px-2 py-4 outline-none';

export default function SkillsContentArea() {
  return (
    <div className="w-full">
      <Tabs defaultValue="0" className="w-full">
        <TabsList className="grid w-full grid-cols-2 bg-gray-50 p-1.5 rounded-xl">
          <TabsTrigger value="0" className="rounded-lg py-2 transition-all">Skill List</TabsTrigger>
          <TabsTrigger value="1" className="rounded-lg py-2 transition-all">Chart</TabsTrigger>
        </TabsList>
        <TabsContent className={tabsContentStyle} value="0">
          <SkillList />
        </TabsContent>
        <TabsContent className={tabsContentStyle} value="1">
          <SkillChart />
        </TabsContent>
      </Tabs>
    </div>
  );
}
