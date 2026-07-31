import PageLayout from '@/components/navigationUI/PageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/Notes/Notes';

const Syntax = () => {
  const markdownFilePath = 'Languages/CFamily/CSharp/Basics/Fundamentals/Syntax';

  return (
    <PageLayout>
      <PageTitle title="C# Basics - Syntax and Types" />
      <Notes filePath={markdownFilePath} />
    </PageLayout>
  );
};

export default Syntax;