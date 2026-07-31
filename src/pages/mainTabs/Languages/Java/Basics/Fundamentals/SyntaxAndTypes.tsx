import PageLayout from '@/components/navigationUI/PageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/Notes/Notes';

const SyntaxAndTypes = () => {
  const markdownFilePath = 'Languages/Java/Basics/Fundamentals/SyntaxAndTypes';

  return (
    <>
      <PageLayout>
        <PageTitle title="Syntax & Types" />
        <Notes filePath={markdownFilePath} />
      </PageLayout>
    </>
  );
};

export default SyntaxAndTypes;
