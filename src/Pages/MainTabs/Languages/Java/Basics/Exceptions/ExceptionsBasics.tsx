import PageLayout from '@/Components/NavigationUI/PageLayout';
import PageTitle from '@/Components/PageComponents/PageTitle';
import Notes from '@/Components/PageComponents/Notes/Notes';

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
