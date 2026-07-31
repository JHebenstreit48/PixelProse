import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

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
