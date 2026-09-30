import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

const Console = () => {
  const markdownFilePath = 'Languages/CFamily/CSharp/Basics/CoreConcepts/Console';

  return (
    <>
      <PageLayout>
        <PageTitle title="Languages - C Family - C# - Core Concepts - Console" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default Console;