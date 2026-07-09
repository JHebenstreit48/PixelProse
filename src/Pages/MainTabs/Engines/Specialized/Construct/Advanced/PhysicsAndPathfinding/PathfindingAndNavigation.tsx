import PageLayout from '@/Components/NavigationUI/PageLayout';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

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
