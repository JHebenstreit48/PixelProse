import PageLayout from '@/components/navigationUI/PageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/Notes/Notes';

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
