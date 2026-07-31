import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

const AsynchronousProgramming = () => {
  const markdownFilePath = 'Languages/CFamily/CSharp/Advanced/ModernFeatures/AsynchronousProgramming';

  return (
    <>
      <PageLayout>
        <PageTitle title="Asynchronous Programming" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default AsynchronousProgramming;
