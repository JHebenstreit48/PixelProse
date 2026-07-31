import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

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
