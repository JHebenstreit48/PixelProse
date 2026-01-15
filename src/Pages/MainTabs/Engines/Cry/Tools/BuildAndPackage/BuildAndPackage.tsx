import PageLayout from '@/Components/NavigationUI/PageLayout';
import Header from '@/Components/Shared/Header/Header';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

const BuildAndPackage = () => {
  const markdownFilePath = 'Engines/Cry/Tools/BuildAndPackage/BuildAndPackage';

  return (
    <>
      <PageLayout>
        <Header />
        <PageTitle title="Build & Package" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default BuildAndPackage;
