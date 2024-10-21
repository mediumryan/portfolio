import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import Projects from './Projects';
import { projects } from '@/data/projects';

export default function ProjectContent() {
  const projectData = projects;
  const cloneData = projects.filter((p) => p.type === 'clone');
  const selfMadeData = projects.filter((p) => p.type === 'self_made');

  return (
    <div className="pb-32">
      <Tabs defaultValue="0">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="0">All ({projectData.length})</TabsTrigger>
          <TabsTrigger value="1">Clone ({cloneData.length})</TabsTrigger>
          <TabsTrigger value="2">Self Made ({selfMadeData.length})</TabsTrigger>
        </TabsList>
        <TabsContent value="0">
          <Projects projectData={projectData} />
        </TabsContent>
        <TabsContent value="1">
          <Projects projectData={cloneData} />
        </TabsContent>
        <TabsContent value="2">
          <Projects projectData={selfMadeData} />
        </TabsContent>
      </Tabs>
    </div>
  );
}
