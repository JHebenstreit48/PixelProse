import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

const OOP = () => {
  const markdownFilePath = 'Languages/CFamily/CSharp/Basics/CoreConcepts/OOP';

  return (
    <>
      <PageLayout>
        <PageTitle title="Languages - C Family - C# - Core Concepts - OOP" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default OOP;