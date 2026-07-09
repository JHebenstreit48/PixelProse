import PageLayout from '@/Components/NavigationUI/PageLayout';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const NavMesh = () => {
  const markdownFilePath = 'Engines/Unity/Advanced/AIAndNavigation/NavMesh';

  return (
    <>
      <PageLayout>
        <PageTitle title="NavMesh" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default NavMesh;
