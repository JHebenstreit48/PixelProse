import PageLayout from '@/components/navigationUI/PageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/Notes/Notes';

const ExceptionHandling = () => {
  const markdownFilePath = 'Languages/CFamily/CPlusPlus/Advanced/ConcurrencyAndErrorHandling/ExceptionHandling';

  return (
    <>
      <PageLayout>
        <PageTitle title="Exception Handling" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default ExceptionHandling;
