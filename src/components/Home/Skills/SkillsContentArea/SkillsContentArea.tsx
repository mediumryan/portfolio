import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import SkillList from './SkillList/SkillList';
import SkillChart from './SkillChart';

const tabsContentStyle = 'px-4 py-2 w-[340px] md:w-full min-h-[460px]';

export default function SkillsContentArea() {
  return (
    <div>
      <Tabs defaultValue="0">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="0">Skill List</TabsTrigger>
          <TabsTrigger value="1">Chart</TabsTrigger>
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
