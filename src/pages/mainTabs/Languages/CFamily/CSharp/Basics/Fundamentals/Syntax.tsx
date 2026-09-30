import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

const Syntax = () => {
  const markdownFilePath = 'Languages/CFamily/CSharp/Basics/Fundamentals/Syntax';

  return (
    <PageLayout>
      <PageTitle title="Languages - C Family - C# - Basics - Syntax & Structure" />
      <Notes filePath={markdownFilePath} />
    </PageLayout>
  );
};

export default Syntax;