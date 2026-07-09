import PageLayout from '@/Components/NavigationUI/PageLayout';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const PhysicsAndCollisions = () => {
  const markdownFilePath = 'Engines/Specialized/Construct/Advanced/PhysicsAndPathfinding/PhysicsAndCollisions';

  return (
    <>
      <PageLayout>
        <PageTitle title="Physics & Collisions" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default PhysicsAndCollisions;
