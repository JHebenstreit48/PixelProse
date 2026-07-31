import PageLayout from '@/components/navigationUI/PageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/Notes/Notes';

const PathfindingAndNavigation = () => {
  const markdownFilePath = 'Engines/Specialized/Construct/Advanced/PhysicsAndPathfinding/PathfindingAndNavigation';

  return (
    <>
      <PageLayout>
        <PageTitle title="Pathfinding & Navigation" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default PathfindingAndNavigation;
