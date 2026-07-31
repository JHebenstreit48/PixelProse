import PageLayout from '@/components/navigationUI/PageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/Notes/Notes';

const ErrorHandling = () => {
  const markdownFilePath = 'Languages/Swift/Basics/OptionalsAndErrors/ErrorHandling';

  return (
    <>
      <PageLayout>
        <PageTitle title="Error Handling" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default ErrorHandling;
