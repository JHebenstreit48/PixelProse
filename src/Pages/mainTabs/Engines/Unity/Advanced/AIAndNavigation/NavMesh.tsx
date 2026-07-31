import PageLayout from '@/components/navigationUI/PageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/Notes/Notes';

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
