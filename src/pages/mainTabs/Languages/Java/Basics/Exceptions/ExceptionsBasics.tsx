import PageLayout from '@/components/navigationUI/PageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/Notes/Notes';

const ExceptionsBasics = () => {
  const markdownFilePath = 'Languages/Java/Basics/Exceptions/ExceptionsBasics';

  return (
    <>
      <PageLayout>
        <PageTitle title="Exceptions Basics" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default ExceptionsBasics;
