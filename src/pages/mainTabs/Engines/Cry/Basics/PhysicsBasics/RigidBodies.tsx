import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

const RigidBodies = () => {
  const markdownFilePath = 'Engines/Cry/Basics/PhysicsBasics/RigidBodies';

  return (
    <>
      <PageLayout>
        <PageTitle title="Rigid Bodies" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default RigidBodies;
