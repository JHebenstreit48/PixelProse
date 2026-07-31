import PageLayout from '@/components/navigationUI/PageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/Notes/Notes';

const BuildAndPackage = () => {
  const markdownFilePath = 'Engines/Cry/Tools/BuildAndPackage/BuildAndPackage';

  return (
    <>
      <PageLayout>
        <PageTitle title="Build & Package" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default BuildAndPackage;
