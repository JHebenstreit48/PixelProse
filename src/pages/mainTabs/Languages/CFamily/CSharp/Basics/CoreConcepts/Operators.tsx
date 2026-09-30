import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

const Operators = () => {
  const markdownFilePath = 'Languages/CFamily/CSharp/Basics/CoreConcepts/Operators';

  return (
    <>
      <PageLayout>
        <PageTitle title="Languages - C Family - C# - Core Concepts - Operators" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default Operators;