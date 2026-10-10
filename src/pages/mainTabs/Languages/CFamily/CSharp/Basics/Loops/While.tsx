import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

const While = () => {
  const markdownFilePath = 'Languages/CFamily/CSharp/Basics/Loops/While';

  return (
    <>
      <PageLayout>
        <PageTitle title="Languages - C Family - C# - Loops - While Loops" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default While;