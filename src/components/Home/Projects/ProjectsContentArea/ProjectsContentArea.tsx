import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import ProjectCarousel from './ProjectCarousel';
import { projects } from '@/data/projects';

export default function ProjectsContentArea() {
  const projectData = projects.reverse();
  const cloneData = projects.reverse().filter((p) => p.type === 'clone');
  const selfMadeData = projects.reverse().filter((p) => p.type === 'self_made');

  return (
    <div>
      <Tabs defaultValue="0">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="0">All</TabsTrigger>
          <TabsTrigger value="1">Clone</TabsTrigger>
          <TabsTrigger value="2">Self Made</TabsTrigger>
        </TabsList>
        <TabsContent value="0">
          <ProjectCarousel data={projectData} />
        </TabsContent>
        <TabsContent value="1">
          <ProjectCarousel data={cloneData} />
        </TabsContent>
        <TabsContent value="2">
          <ProjectCarousel data={selfMadeData} />
        </TabsContent>
      </Tabs>
    </div>
  );
}
