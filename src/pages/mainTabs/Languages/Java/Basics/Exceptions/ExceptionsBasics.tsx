import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

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
