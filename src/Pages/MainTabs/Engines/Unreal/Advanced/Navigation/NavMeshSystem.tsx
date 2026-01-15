import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const NavMeshSystem = () => {
  const markdownFilePath = 'Engines/Unreal/Advanced/Navigation/NavMeshSystem';

  return (
    <>
      <PageLayout>
        <Header />
        <PageTitle title="NavMesh System" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default NavMeshSystem;
