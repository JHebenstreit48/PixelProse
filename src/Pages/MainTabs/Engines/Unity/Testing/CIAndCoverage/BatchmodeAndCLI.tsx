import PageLayout from '@/components/navigationUI/PageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/Notes/Notes';

const BatchmodeAndCLI = () => {
  const markdownFilePath = 'Engines/Unity/Testing/CIAndCoverage/BatchmodeAndCLI';

  return (
    <>
      <PageLayout>
        <PageTitle title="Batchmode & CLI" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default BatchmodeAndCLI;
