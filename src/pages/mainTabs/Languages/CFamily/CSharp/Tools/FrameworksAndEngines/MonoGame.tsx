import PageLayout from '@/components/navigationUI/pageLayout';
import PageTitle from '@/components/pageComponents/pageTitle';
import Notes from '@/components/pageComponents/notes/notes';

const MonoGame = () => {
  const markdownFilePath = 'Languages/CFamily/CSharp/Tools/Frameworks/MonoGame';

  return (
    <PageLayout>
      <PageTitle title="C# Tools - MonoGame" />
      <Notes filePath={markdownFilePath} />
    </PageLayout>
  );
};

export default MonoGame;