import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

const Foreach = () => {
  const markdownFilePath = 'Languages/CFamily/CSharp/Basics/Loops/Foreach';

  return (
    <>
      <PageLayout>
        <PageTitle title="Languages - C Family - C# - Loops - Foreach Loops" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default Foreach;