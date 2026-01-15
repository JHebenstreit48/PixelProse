import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const RigidBodies = () => {
  const markdownFilePath = 'Engines/Cry/Basics/PhysicsBasics/RigidBodies';

  return (
    <>
      <PageLayout>
        <Header />
        <PageTitle title="Rigid Bodies" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default RigidBodies;
