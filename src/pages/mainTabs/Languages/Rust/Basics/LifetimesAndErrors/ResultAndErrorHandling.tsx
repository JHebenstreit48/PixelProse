import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

const ResultAndErrorHandling = () => {
  const markdownFilePath = 'Languages/Rust/Basics/LifetimesAndErrors/ResultAndErrorHandling';

  return (
    <>
      <PageLayout>
        <PageTitle title="Result & Error Handling" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default ResultAndErrorHandling;
