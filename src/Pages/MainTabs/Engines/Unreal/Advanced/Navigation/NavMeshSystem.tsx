import PageLayout from '@/Components/NavigationUI/PageLayout';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const NavMeshSystem = () => {
  const markdownFilePath = 'Engines/Unreal/Advanced/Navigation/NavMeshSystem';

  return (
    <>
      <PageLayout>
        <PageTitle title="NavMesh System" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default NavMeshSystem;
