import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

const NuGet = () => {
  const markdownFilePath = 'Languages/CFamily/CSharp/Tools/Packages/NuGet';

  return (
    <PageLayout>
      <PageTitle title="C# Tools - NuGet" />
      <Notes filePath={markdownFilePath} />
    </PageLayout>
  );
};

export default NuGet;