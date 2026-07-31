import PageLayout from '@/components/navigationUI/PageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/Notes/Notes';

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
