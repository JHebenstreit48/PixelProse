import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

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
