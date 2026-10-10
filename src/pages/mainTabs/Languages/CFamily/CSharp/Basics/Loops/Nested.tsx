import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

const Nested = () => {
  const markdownFilePath = 'Languages/CFamily/CSharp/Basics/Loops/Nested';

  return (
    <>
      <PageLayout>
        <PageTitle title="Languages - C Family - C# - Loops - Nested Loops" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default Nested;