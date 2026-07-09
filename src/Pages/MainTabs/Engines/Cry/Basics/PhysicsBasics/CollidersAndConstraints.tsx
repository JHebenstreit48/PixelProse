import PageLayout from '@/Components/NavigationUI/PageLayout';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const CollidersAndConstraints = () => {
  const markdownFilePath = 'Engines/Cry/Basics/PhysicsBasics/CollidersAndConstraints';

  return (
    <>
      <PageLayout>
        <PageTitle title="Colliders & Constraints" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default CollidersAndConstraints;
