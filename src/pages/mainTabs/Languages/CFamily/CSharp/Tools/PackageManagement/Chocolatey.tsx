import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

const Chocolatey = () => {
  const markdownFilePath =
    'Languages/CFamily/CSharp/Tools/Packages/Chocolatey';

  return (
    <PageLayout>
      <PageTitle title="C# Tools - Chocolatey" />
      <Notes filePath={markdownFilePath} />
    </PageLayout>
  );
};

export default Chocolatey;