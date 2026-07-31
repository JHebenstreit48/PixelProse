import PageLayout from '@/components/navigationUI/PageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/Notes/Notes';

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
