import PageLayout from '@/components/navigationUI/PageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/Notes/Notes';

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
